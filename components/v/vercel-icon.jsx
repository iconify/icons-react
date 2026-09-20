import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":222};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.gzzr1mstp {
  d: path("m128 0l128 221.705H0z");
}
</style><path class="gzzr1mstp"/>`,
		"fallback": "logos:vercel-icon",
	});
}

export default Component;
