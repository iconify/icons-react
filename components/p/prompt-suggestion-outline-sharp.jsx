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
		"content": `<style>.ll7xx5ryg {
  fill: currentColor;
  d: path("m15 19l-1.4-1.425L17.175 14H7.5q-1.875 0-3.187-1.312T3 9.5t1.313-3.187T7.5 5H8v2h-.5q-1.05 0-1.775.725T5 9.5t.725 1.775T7.5 12h9.675L13.6 8.4L15 7l6 6z");
}
</style><path class="ll7xx5ryg"/>`,
		"fallback": "material-symbols:prompt-suggestion-outline-sharp",
	});
}

export default Component;
