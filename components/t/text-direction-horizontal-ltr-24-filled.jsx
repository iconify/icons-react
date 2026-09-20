import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.hyrtucbmc {
  fill: currentColor;
  d: path("M7.75 3a1 1 0 0 1 .923.615l3.75 9a1 1 0 1 1-1.846.77L9.584 11H5.917l-.994 2.385a1 1 0 0 1-1.846-.77l3.75-9A1 1 0 0 1 7.75 3m0 3.6l-1 2.4h2zm9.543-1.307a1 1 0 0 1 1.414 0l1.927 1.934c.223.182.365.46.366.77v.006c0 .31-.143.588-.366.77l-1.927 1.934a1 1 0 0 1-1.414-1.414L17.586 9H13a1 1 0 0 1 0-2h4.586l-.293-.293a1 1 0 0 1 0-1.414m1.414 9a1 1 0 0 0-1.414 1.414l.293.293H4a1 1 0 1 0 0 2h13.586l-.293.293a1 1 0 0 0 1.414 1.414l2-2a1 1 0 0 0 0-1.414z");
}
</style><path class="hyrtucbmc"/>`,
		"fallback": "fluent:text-direction-horizontal-ltr-24-filled",
	});
}

export default Component;
