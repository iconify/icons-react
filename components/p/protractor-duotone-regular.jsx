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
		"content": `<style>.ic_pehd5a {
  d: path("M3 17h18");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.oj5viqdwl {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M7 17a5 5 0 0 1 10 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.on0zajbot {
  d: path("M7 17a5 5 0 0 1 10 0");
}

.ru5hm3b_s {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M12 8v3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.srzgk7jml {
  d: path("M3 17a9 9 0 0 1 18 0");
}

.uzmclv6tb {
  d: path("M12 8v3");
}

.wfd9yacqd {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M3 17h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.x6ei3vbab {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M3 17a9 9 0 0 1 18 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="nrj6p8qat"><path class="x6ei3vbab"/><path class="wfd9yacqd"/><path class="oj5viqdwl"/><path class="ru5hm3b_s"/><path class="srzgk7jml"/><path class="ic_pehd5a"/><path class="on0zajbot"/><path class="uzmclv6tb"/></g>`,
		"fallback": "iconmind:protractor-duotone-regular",
	});
}

export default Component;
