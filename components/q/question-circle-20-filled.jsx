import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ahc9kxb_s {
  fill: currentColor;
  d: path("M10 2a8 8 0 1 1 0 16a8 8 0 0 1 0-16m0 11.5a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5m0-8A2.5 2.5 0 0 0 7.5 8a.5.5 0 0 0 1 0a1.5 1.5 0 1 1 2.632.984l-.106.11l-.118.1l-.247.185a3 3 0 0 0-.356.323C9.793 10.248 9.5 10.988 9.5 12a.5.5 0 0 0 1 0c0-.758.196-1.254.535-1.614l.075-.076l.08-.073l.088-.072l.219-.163l.154-.125A2.5 2.5 0 0 0 10 5.5");
}
</style><path class="ahc9kxb_s"/>`,
		"fallback": "fluent:question-circle-20-filled",
	});
}

export default Component;
