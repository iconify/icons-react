import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.a9xv0xb3g {
  d: path("M.03 0H256v256H.03V0z");
  fill: var(--svg-color--2b87d4, #2B87D4);
}

.kk5ahkbqb {
  d: path("M148 100h24v24h-24v-24z");
  fill: var(--svg-color--fff, #FFF);
}

.m1hfw-bpz {
  d: path("M84 132h24v24H84v-24z");
  fill: var(--svg-color--fff, #FFF);
}

.mvu58yb4c {
  d: path("M84 164h24v24H84v-24z");
  fill: var(--svg-color--fff, #FFF);
}

.qqo6s_0ji {
  d: path("M116 68h24v24h-24V68z");
  fill: var(--svg-color--fff, #FFF);
}

.s6it66x1q {
  d: path("M116 132h24v24h-24v-24z");
  fill: var(--svg-color--fff, #FFF);
}

.up3p4acio {
  d: path("M84 68h24v24H84V68z");
  fill: var(--svg-color--fff, #FFF);
}
</style><path class="a9xv0xb3g"/><path class="up3p4acio"/><path class="qqo6s_0ji"/><path class="m1hfw-bpz"/><path class="mvu58yb4c"/><path class="s6it66x1q"/><path class="kk5ahkbqb"/>`,
		"fallback": "logos:pixelapse",
	});
}

export default Component;
