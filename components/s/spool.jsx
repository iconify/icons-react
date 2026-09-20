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
		"content": `<style>.ixzx1qbfp {
  fill: var(--svg-color--24b4e6, #24b4e6);
  d: path("m7.759 14l-1.555-2.84a1.65 1.65 0 0 1 .635-2.23l8.94-5.06c.115-.115.29-.42.115-.685L16.209 3l1.69 2.965c.17.475.245 1.575-.795 2.165c-1.035.585-6.295 3.485-8.795 4.86c-.17.095-.47.39-.32.825c-.05.05-.18.15-.23.185m0 7l-1.555-2.84a1.65 1.65 0 0 1 .635-2.23l8.94-5.06c.115-.115.29-.42.115-.685l.315-.185l1.69 2.965c.17.475.245 1.575-.795 2.165c-1.035.585-6.295 3.485-8.795 4.86c-.17.095-.47.39-.32.825c-.05.05-.18.15-.23.185");
}
</style><path class="ixzx1qbfp"/>`,
		"fallback": "token-branded:spool",
	});
}

export default Component;
