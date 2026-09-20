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
		"content": `<style>.gd2i9y3qw {
  fill: currentColor;
  d: path("M6 18V6h2v12zm4 0l10-6l-10-6z");
}
</style><path class="gd2i9y3qw"/>`,
		"fallback": "material-symbols:resume",
	});
}

export default Component;
