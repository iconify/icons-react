import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uwc5kob9j.css';
import '../../css/n/na9-sph2f.css';
import '../../css/s/sq4561bvy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g transform="translate(13.512 10.42)scale(.06153)"><circle class="uwc5kob9j"/><circle class="na9-sph2f"/><path class="sq4561bvy"/></g>`,
		"fallback": "material-icon-theme:spwn",
	});
}

export default Component;
