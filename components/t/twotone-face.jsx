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
		"content": `<style>.icmwrobqx {
  fill: currentColor;
  d: path("M17.5 8c.46 0 .91-.05 1.34-.12C17.44 5.56 14.9 4 12 4c-.46 0-.91.05-1.34.12C12.06 6.44 14.6 8 17.5 8M8.08 5.03a8.05 8.05 0 0 0-3.66 4.44a8.05 8.05 0 0 0 3.66-4.44");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.pt3nek-ut {
  cx: 15px;
  cy: 13px;
  r: 1.25px;
  fill: currentColor;
}

.t8-_arz4f {
  cx: 9px;
  cy: 13px;
  r: 1.25px;
  fill: currentColor;
}

.v73hp-bvd {
  fill: currentColor;
  d: path("M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m0 2c2.9 0 5.44 1.56 6.84 3.88c-.43.07-.88.12-1.34.12c-2.9 0-5.44-1.56-6.84-3.88c.43-.07.88-.12 1.34-.12M8.08 5.03a8.05 8.05 0 0 1-3.66 4.44a8.05 8.05 0 0 1 3.66-4.44M12 20c-4.41 0-8-3.59-8-8c0-.05.01-.1.01-.15c2.6-.98 4.68-2.99 5.74-5.55a9.94 9.94 0 0 0 9.92 3.46c.21.71.33 1.46.33 2.24c0 4.41-3.59 8-8 8");
}
</style><path class="icmwrobqx"/><path class="v73hp-bvd"/><circle class="t8-_arz4f"/><circle class="pt3nek-ut"/>`,
		"fallback": "ic:twotone-face",
	});
}

export default Component;
