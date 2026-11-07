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
		"content": `<style>.cuyn6tgcc {
  fill: currentColor;
}

.gcnm19bpg {
  d: path("M14 5a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2Zm-6 5a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2Zm0 5a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2Z");
}

.qvxycib1a {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M12 14a1 1 0 0 1-1-1v-3a1 1 0 0 1 2 0v.423a5.473 5.473 0 1 1-1.894 7.024a1 1 0 1 1 1.788-.894a3.474 3.474 0 0 0 5.561.902a3.47 3.47 0 0 0 .295-4.574A3.47 3.47 0 0 0 14.252 12H15a1 1 0 0 1 0 2Z");
}
</style><g class="cuyn6tgcc"><path class="qvxycib1a"/><path class="gcnm19bpg"/></g>`,
		"fallback": "coolicons:list-restart-bulk-sharp",
	});
}

export default Component;
