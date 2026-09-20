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
		"content": `<style>.dlj-lgtcj {
  fill: currentColor;
  d: path("M12.725 18.5L15 17.125l2.275 1.375l-.6-2.6l2-1.725l-2.625-.225L15 11.5l-1.05 2.45l-2.625.225l2 1.725zM6 14v2H2V2h14v4h-2V4H4v10zm2 8V8h14v14z");
}
</style><path class="dlj-lgtcj"/>`,
		"fallback": "material-symbols:stack-star-sharp",
	});
}

export default Component;
