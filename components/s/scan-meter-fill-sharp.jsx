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
		"content": `<style>.m_ajgehgd {
  fill: currentColor;
  d: path("M2 3a1 1 0 0 1 1-1h4a1 1 0 0 1 0 2H4v3a1 1 0 0 1-2 0Zm19-1a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0V4h-3a1 1 0 0 1 0-2ZM5 14v-4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1m2-3v2h2v-2Zm4 0v2h2v-2Zm4 0v2h2v-2ZM2 21v-4a1 1 0 0 1 2 0v3h3a1 1 0 0 1 0 2H3a1 1 0 0 1-1-1m20 0a1 1 0 0 1-1 1h-4a1 1 0 0 1 0-2h3v-3a1 1 0 0 1 2 0Z");
}
</style><path class="m_ajgehgd"/>`,
		"fallback": "coolicons:scan-meter-fill-sharp",
	});
}

export default Component;
