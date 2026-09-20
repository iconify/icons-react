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
		"content": `<style>.f934iu1fb {
  cx: 18px;
  cy: 18px;
  r: 14px;
  fill: var(--svg-color--e1e8ed, #e1e8ed);
}

.mbt1d-r9l {
  fill: var(--svg-color--66757f, #66757f);
  d: path("M17 18a1 1 0 1 0 2 0V7a1 1 0 1 0-2 0z");
}

.shajr37is {
  fill: var(--svg-color--66757f, #66757f);
  d: path("M13 26.661c.479.276 1.09.112 1.367-.366l4.5-7.795a1 1 0 0 0-1.732-1l-4.5 7.795A1 1 0 0 0 13 26.661");
}

.yqfvb1bwf {
  cx: 18px;
  cy: 18px;
  r: 18px;
  fill: var(--svg-color--99aab5, #99aab5);
}
</style><circle class="yqfvb1bwf"/><circle class="f934iu1fb"/><path class="mbt1d-r9l"/><path class="shajr37is"/>`,
		"fallback": "twemoji:seven-oclock",
	});
}

export default Component;
