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
		"content": `<style>.ianha5b-p {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M17 6H8a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h11c1.1 0 2-.9 2-2v-9zM8 9.5A1.5 1.5 0 0 1 9.5 8h4a1.5 1.5 0 0 1 0 3h-4A1.5 1.5 0 0 1 8 9.5m5.5 9.5a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5");
}

.kvvre9b5e {
  fill: currentColor;
  d: path("M2 4a2 2 0 0 1 2-2h9a1 1 0 1 1 0 2H5a1 1 0 0 0-1 1v8a1 1 0 1 1-2 0z");
}
</style><path clip-rule="evenodd" class="ianha5b-p"/><path class="kvvre9b5e"/>`,
		"fallback": "ic:round-save-all",
	});
}

export default Component;
