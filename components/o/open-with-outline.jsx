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
		"content": `<style>.vmvg__kez {
  fill: currentColor;
  d: path("M12 21.308L8.442 17.75l.714-.713L11.5 19.38V14.5h1v4.875l2.339-2.344l.719.719zm-5.75-5.75L2.692 12l3.552-3.552l.714.714L4.619 11.5H9.5v1H4.625l2.344 2.339zm11.5 0l-.713-.714L19.38 12.5H14.5v-1h4.875l-2.344-2.339l.719-.719L21.308 12zM11.5 9.5V4.62L9.156 6.963l-.714-.714L12 2.692l3.558 3.558l-.714.714L12.5 4.618V9.5z");
}
</style><path class="vmvg__kez"/>`,
		"fallback": "material-symbols-light:open-with-outline",
	});
}

export default Component;
