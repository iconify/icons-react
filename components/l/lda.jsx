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
		"content": `<style>.hp4shqyrk {
  fill: currentColor;
  d: path("M11 22v-3.425L5 16.05V11h6V8h-1q-.825 0-1.412-.587T8 6V4q0-.825.588-1.412T10 2h4q.825 0 1.413.588T16 4v2q0 .825-.587 1.413T14 8h-1v3h6v5.05l-6 2.525V22zm0-5.6V13H7v1.725zm2 0l4-1.675V13h-4z");
}
</style><path class="hp4shqyrk"/>`,
		"fallback": "material-symbols:lda",
	});
}

export default Component;
