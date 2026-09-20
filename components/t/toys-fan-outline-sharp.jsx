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
		"content": `<style>.zlj96bc5h {
  fill: currentColor;
  d: path("M12 12q0-1.91 1.372-3.282t3.282-1.372t3.282 1.372T21.308 12zm-7.935 3.282Q2.692 13.91 2.692 12H12q0 1.91-1.372 3.282t-3.282 1.372t-3.282-1.372M12 12q-1.91 0-3.282-1.372T7.346 7.346t1.372-3.282T12 2.692zm0 9.308V12q1.91 0 3.282 1.372t1.372 3.282t-1.372 3.282T12 21.308");
}
</style><path class="zlj96bc5h"/>`,
		"fallback": "material-symbols-light:toys-fan-outline-sharp",
	});
}

export default Component;
