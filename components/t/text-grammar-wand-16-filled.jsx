import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.vkd3rrbpr {
  fill: currentColor;
  d: path("M2.75 2.5a.75.75 0 0 0 0 1.5h10.5a.75.75 0 0 0 0-1.5zm1.69 9.935l.936-.935H2.75a.75.75 0 0 0 0 1.5h1.334c.072-.206.191-.4.356-.565M2.75 8.5H6c0 .637.4 1.19.973 1.405L6.878 10H2.75a.75.75 0 0 1 0-1.5m0-3a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5zm8.246-.061a.5.5 0 0 0-.992 0l-.09.734a2 2 0 0 1-1.741 1.74l-.734.09a.5.5 0 0 0 0 .993l.734.09a2 2 0 0 1 1.74 1.741l.09.734a.5.5 0 0 0 .993 0l.09-.734a2 2 0 0 1 1.741-1.74l.734-.09a.5.5 0 0 0 0-.993l-.734-.09a2 2 0 0 1-1.74-1.741zm-2.142 4.708a.5.5 0 0 1 0 .707l-3 2.996a.5.5 0 1 1-.707-.707l3-2.997a.5.5 0 0 1 .707 0");
}
</style><path class="vkd3rrbpr"/>`,
		"fallback": "fluent:text-grammar-wand-16-filled",
	});
}

export default Component;
