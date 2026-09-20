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
		"content": `<style>.ft5dv1b6b {
  fill: none;
}

.hyeqkubsq {
  fill: var(--svg-color--6a53f3, #6a53f3);
  fill-rule: evenodd;
  d: path("m21 12l-9-9l-9 9l9 9zM9.5 16h-1v-3.5h-2v-1h2V8h1l5 6.28V8h1v3.5h2v1h-2V16h-1l-5-6.245z");
}

.vef2dttgl {
  fill: var(--svg-color--5428db, #5428db);
  d: path("M9.5 16h-1v-3.5h-2v-1h2v-.894a4.3 4.3 0 0 0-.895-.106C5.355 10.5 3 12 3 12l9 9l8.975-8.97c-.3.17-2.045.97-4.645.97q-.406-.001-.83-.062v3.061h-1l-3.707-4.63a24 24 0 0 0-1.293-.483z");
}

.yp505ab4a {
  fill: var(--svg-color--5428db, #5428db);
  d: path("m12.832 12.183l1.67 2.096V12.73a17 17 0 0 1-1.67-.547");
}
</style><g class="ft5dv1b6b"><path clip-rule="evenodd" class="hyeqkubsq"/><path class="vef2dttgl"/><path class="yp505ab4a"/></g>`,
		"fallback": "token-branded:nsbt",
	});
}

export default Component;
