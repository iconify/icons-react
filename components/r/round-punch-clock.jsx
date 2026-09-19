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
		"content": `<style>.boh90gf-d {
  fill: currentColor;
  d: path("M12.5 13.79V12c0-.28-.22-.5-.5-.5s-.5.22-.5.5v2c0 .13.05.26.15.35l1.14 1.14c.2.2.51.2.71 0s.2-.51 0-.71z");
}

.q2fguohcx {
  fill: currentColor;
  d: path("M19 6h-1V3c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v3H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2M8 3h8v3H8zm4 16c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5");
}
</style><path class="q2fguohcx"/><path class="boh90gf-d"/>`,
		"fallback": "ic:round-punch-clock",
	});
}

export default Component;
