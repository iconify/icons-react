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
		"content": `<style>.n2qa2kq8k {
  fill: currentColor;
  d: path("M18.385 9V6.616H21v-.847h-2.616V5h3.385v2.385h-2.615v.846h2.615V9zM7.009 19l4.183-6.467l-3.838-5.917h1.284l3.331 5.192h.023l3.383-5.192h1.29l-3.901 5.917L16.99 19H15.7l-3.708-5.713h-.023L8.3 19z");
}
</style><path class="n2qa2kq8k"/>`,
		"fallback": "material-symbols-light:superscript-outline-sharp",
	});
}

export default Component;
