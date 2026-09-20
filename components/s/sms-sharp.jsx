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
		"content": `<style>.jbcmb0bkn {
  fill: currentColor;
  d: path("M3 20.077V3h18v14H6.077zm5.54-9.537q.23-.23.23-.54t-.23-.54T8 9.23t-.54.23t-.23.54t.23.54t.54.23t.54-.23m4 0q.23-.23.23-.54t-.23-.54t-.54-.23t-.54.23t-.23.54t.23.54t.54.23t.54-.23m4 0q.23-.23.23-.54t-.23-.54t-.54-.23t-.54.23t-.23.54t.23.54t.54.23t.54-.23");
}
</style><path class="jbcmb0bkn"/>`,
		"fallback": "material-symbols-light:sms-sharp",
	});
}

export default Component;
