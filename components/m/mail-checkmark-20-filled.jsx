import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.o0-oui73l {
  fill: currentColor;
  d: path("M14.5 11c1.33 0 2.55-.472 3.5-1.257V14.5a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 2 14.5V7.373l7.747 4.558a.5.5 0 0 0 .507 0l2.23-1.312A5.5 5.5 0 0 0 14.5 11m-10-7h4.707a5.5 5.5 0 0 0 2.235 6.072L10 10.92L2.015 6.223A2.5 2.5 0 0 1 4.5 4m10 6a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9m2.354-5.646l-3 3a.5.5 0 0 1-.708 0l-1-1a.5.5 0 0 1 .708-.708l.646.647l2.646-2.647a.5.5 0 0 1 .708.708");
}
</style><path class="o0-oui73l"/>`,
		"fallback": "fluent:mail-checkmark-20-filled",
	});
}

export default Component;
