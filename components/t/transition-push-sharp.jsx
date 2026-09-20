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
		"content": `<style>.hcrxivbhe {
  fill: currentColor;
  d: path("M8.654 19v-.975h2.096V6H8.654V5h3.096v14zm5.48 0V5H22v14zm-8.422-3.884l-.714-.708l1.96-1.908H2v-1h4.958l-1.96-1.883l.694-.713L8.885 12z");
}
</style><path class="hcrxivbhe"/>`,
		"fallback": "material-symbols-light:transition-push-sharp",
	});
}

export default Component;
