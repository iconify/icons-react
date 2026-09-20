import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.dgh7jhswh {
  fill: var(--svg-color--9266cc, #9266cc);
  d: path("M36 32a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4z");
}

.lmsb3c7ts {
  fill: var(--svg-color--fff, #fff);
  d: path("m27.152 18l3.716-6.504A1 1 0 0 0 30 10h-7.42l-3.712-6.496c-.355-.623-1.381-.623-1.736 0L13.42 10H6a1 1 0 0 0-.868 1.496L8.848 18l-3.716 6.504A1 1 0 0 0 6 26h7.42l3.712 6.496a.999.999 0 0 0 1.736 0L22.58 26H30a1 1 0 0 0 .868-1.496zm1.124-6L26 15.984L23.723 12zm-3.428 6l-3.428 6h-6.84l-3.429-6l3.429-6h6.839zM18 6.016L20.277 10h-4.553zM7.723 12h4.554L10 15.985zm0 12L10 20.015L12.277 24zM18 29.984L15.723 26h4.553zM23.723 24L26 20.016L28.276 24z");
}
</style><path class="dgh7jhswh"/><path class="lmsb3c7ts"/>`,
		"fallback": "twemoji:star-of-david",
	});
}

export default Component;
