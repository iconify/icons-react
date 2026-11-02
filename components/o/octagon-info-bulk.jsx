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

.kdrfrssuj {
  d: path("M12 7h.01a1 1 0 0 1 0 2H12a1 1 0 0 1 0-2m1 4v5a1 1 0 0 1-2 0v-5a1 1 0 0 1 2 0");
}

.uutrwzg_g {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M12 2h3c1.039 0 1.992.578 2.707 1.293l3 3C21.422 7.008 22 7.961 22 9v6c0 1.039-.578 1.992-1.293 2.707l-3 3C16.992 21.422 16.039 22 15 22H9c-1.039 0-1.992-.578-2.707-1.293l-3-3C2.578 16.992 2 16.039 2 15V9c0-1.039.578-1.992 1.293-2.707l3-3C7.008 2.578 7.961 2 9 2Z");
}
</style><g class="cuyn6tgcc"><path class="uutrwzg_g"/><path class="kdrfrssuj"/></g>`,
		"fallback": "coolicons:octagon-info-bulk",
	});
}

export default Component;
