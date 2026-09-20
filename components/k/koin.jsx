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
		"content": `<style>.fmghfge-q {
  fill: var(--svg-color--6f00f6, #6f00f6);
}

.jwljmub1m {
  fill-rule: evenodd;
  d: path("m12.001 9l-2.5 1.475v3.05l2.5 1.474l2.5-1.475v-3.05zm3.5 1l-3.5-2l-3.5 2v4l3.5 2l3.5-2z");
}

.vh3m3-7kz {
  fill-rule: evenodd;
  d: path("M12 3.98L5 7.99v8.02l7 4.01l7-4.01V7.99zm8 3.52L12 3L4 7.5v9l8 4.5l8-4.5z");
}

.vpo0__utv {
  d: path("M11.5 12.2L4.26 8.127l.436-.74L12 11.5l7.13-4.11l.435.73L12.5 12.2v8.165h-1z");
}
</style><g class="fmghfge-q"><path clip-rule="evenodd" class="vh3m3-7kz"/><path clip-rule="evenodd" class="jwljmub1m"/><path class="vpo0__utv"/></g>`,
		"fallback": "token-branded:koin",
	});
}

export default Component;
