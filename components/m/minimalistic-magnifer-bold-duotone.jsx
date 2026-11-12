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
		"content": `<style>.g-tqdrbyb {
  fill: currentColor;
  d: path("M20.313 11.157a9.157 9.157 0 1 1-18.313 0a9.157 9.157 0 0 1 18.313 0");
  opacity: var(--svg-opacity--0-5, 0.5);
}

.j-tmtc6ls {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M18.839 18.839a.723.723 0 0 1 1.022 0l1.928 1.927a.723.723 0 0 1-1.023 1.023L18.84 19.86a.723.723 0 0 1 0-1.022");
}
</style><path class="g-tqdrbyb"/><path clip-rule="evenodd" class="j-tmtc6ls"/>`,
		"fallback": "solar:minimalistic-magnifer-bold-duotone",
	});
}

export default Component;
