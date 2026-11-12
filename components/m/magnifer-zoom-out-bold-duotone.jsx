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
		"content": `<style>.aygw_60rm {
  fill: currentColor;
  d: path("M11.157 20.313a9.157 9.157 0 1 0 0-18.313a9.157 9.157 0 0 0 0 18.313");
  opacity: var(--svg-opacity--0-5, 0.5);
}

.h09tvusar {
  fill: currentColor;
  d: path("M17.1 18.122a9 9 0 0 0 1.022-1.022l3.666 3.666a.723.723 0 0 1-1.022 1.022z");
}

.qy2alob5l {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M8.023 11.157c0-.4.324-.723.723-.723h4.82a.723.723 0 1 1 0 1.445h-4.82a.723.723 0 0 1-.723-.723");
}
</style><path class="aygw_60rm"/><path class="h09tvusar"/><path clip-rule="evenodd" class="qy2alob5l"/>`,
		"fallback": "solar:magnifer-zoom-out-bold-duotone",
	});
}

export default Component;
