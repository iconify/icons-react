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
		"content": `<style>.sutvrrf4n {
  fill: currentColor;
  d: path("M13.5 3a5.5 5.5 0 1 0 0 11H15v7.208c0 .437.336.792.75.792s.75-.355.75-.792V4.5H18v16.708c0 .437.336.792.75.792s.75-.355.75-.792V4.5h.545l.13-.007c.466-.05.825-.363.825-.743c0-.414-.427-.75-.955-.75zm0 1.5H15v8h-1.5a4 4 0 0 1 0-8m-9.42 7.358a.668.668 0 0 1-.898-.984L4.896 9L3.182 7.126l-.062-.077a.668.668 0 0 1 1.033-.84l2.146 2.333l.065.081a.67.67 0 0 1-.065.835l-2.146 2.333zm1.321 8a.668.668 0 0 0 .898-.984L4.585 17L6.3 15.126l.062-.077a.668.668 0 0 0-1.033-.84l-2.146 2.333l-.065.081a.67.67 0 0 0 .065.835l2.146 2.333z");
}
</style><path class="sutvrrf4n"/>`,
		"fallback": "fluent:text-paragraph-direction-24-regular",
	});
}

export default Component;
