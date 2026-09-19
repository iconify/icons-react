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
		"content": `<style>.ekoa7jbig {
  fill: currentColor;
  d: path("M12 4C7.31 4 3.07 5.9 0 8.98L12 21l5-5.01V8h5.92C19.97 5.51 16.16 4 12 4m7 14h2v2h-2z");
}

.skrbczyxd {
  fill: currentColor;
  d: path("M19 10h2v6h-2z");
}
</style><path class="ekoa7jbig"/><path class="skrbczyxd"/>`,
		"fallback": "ic:outline-signal-wifi-statusbar-connected-no-internet-4",
	});
}

export default Component;
