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
		"content": `<style>.yysb2trkq {
  fill: currentColor;
  d: path("M2 18V6h5v6h2V6h2v6h2V6h2v6h2V6h5v12z");
}
</style><path class="yysb2trkq"/>`,
		"fallback": "material-symbols:straighten-sharp",
	});
}

export default Component;
