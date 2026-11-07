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
		"content": `<style>.klp6s5eiw {
  fill: currentColor;
  d: path("M8 14.535V7a1 1 0 0 1 .684-.949l12-4A1.002 1.002 0 0 1 22 3v13a4.001 4.001 0 1 1-2-3.465V9.387l-10 3.334V18a4.001 4.001 0 1 1-2-3.465M20 4.387L10 7.721v2.892l10-3.334Z");
}
</style><path class="klp6s5eiw"/>`,
		"fallback": "coolicons:music-notes-double-fill-sharp",
	});
}

export default Component;
