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
		"content": `<style>.zk5pmqbwk {
  fill: currentColor;
  d: path("M9.666 14.5h.946l1.03-2.608h3.727L16.4 14.5h.973l-3.554-9h-.638zm2.273-3.408l1.492-4.019h.1l1.53 4.02zM6.5 17V3h14v14zm1-1h12V4h-12zm-4 4V6.616h1V19h12.385v1zm4-16v12z");
}
</style><path class="zk5pmqbwk"/>`,
		"fallback": "material-symbols-light:type-specimen-outline-sharp",
	});
}

export default Component;
