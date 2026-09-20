import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":329};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.j8cspnbqm {
  fill: var(--svg-color--d4eb95, #d4eb95);
  d: path("M128 72.17L0 135.367v128.535l128 64.268l128-64.268V135.367z");
}

.lazc0b2bx {
  fill: var(--svg-color--96dc75, #96dc75);
  d: path("M128 51.745L0 114.94v128.536l128 64.268l128-64.268V114.94z");
}

.tw2n3-bxq {
  fill: var(--svg-color--317342, #317342);
  d: path("M128 0L0 63.197v128.535L128 256l128-64.268V63.197z");
  opacity: var(--svg-opacity--0-553, 0.553);
}

.zwr1bgbkd {
  fill: var(--svg-color--34954c, #34954c);
  d: path("M128 122.795L0 62.638v128.908L128 256l128-64.454V62.638z");
  opacity: var(--svg-opacity--0-553, 0.553);
}
</style><path class="j8cspnbqm"/><path class="lazc0b2bx"/><path class="tw2n3-bxq"/><path class="zwr1bgbkd"/>`,
		"fallback": "logos:leveldb",
	});
}

export default Component;
