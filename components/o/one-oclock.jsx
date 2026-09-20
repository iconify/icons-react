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

.wyfkqbb6s {
  fill: var(--svg-color--66757f, #66757f);
  d: path("M23.25 9.237a1 1 0 0 1 .367 1.366l-4.5 7.795a1 1 0 0 1-1.732-1l4.5-7.795a1 1 0 0 1 1.365-.366");
}

.y_ptlabie {
  fill: var(--svg-color--66757f, #66757f);
  d: path("M19 18a1 1 0 1 1-2 0V7a1 1 0 0 1 2 0z");
}

.yqfvb1bwf {
  cx: 18px;
  cy: 18px;
  r: 18px;
  fill: var(--svg-color--99aab5, #99aab5);
}
</style><circle class="yqfvb1bwf"/><circle class="f934iu1fb"/><path class="y_ptlabie"/><path class="wyfkqbb6s"/>`,
		"fallback": "twemoji:one-oclock",
	});
}

export default Component;
