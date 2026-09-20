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
		"content": `<style>.gwyq_eb-p {
  fill: currentColor;
  d: path("M7 15V7h10.15l-2.575-2.575L16 3l5 5l-5 5l-1.425-1.4L17.15 9H9v6zm-4 6V4h2v15h12v-4h2v6z");
}
</style><path class="gwyq_eb-p"/>`,
		"fallback": "material-symbols:share-windows-sharp",
	});
}

export default Component;
