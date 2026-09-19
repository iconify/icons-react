import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5tzahfeo.css';
import '../../css/u/ufj74pa-q.css';
import '../../css/o/ol7cejbxg.css';
import '../../css/t/te5smcbrc.css';
import '../../css/a/alal1lbgu.css';
import '../../css/h/htihj0m8a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path fill="url(#SVGlPEDZdtc)" class="k5tzahfeo"/><path fill="url(#SVGHnLxrbtq)" class="k5tzahfeo"/><defs><linearGradient id="SVGlPEDZdtc" x1="17" x2="7.625" y1="18.25" y2="3.875" gradientUnits="userSpaceOnUse"><stop class="ufj74pa-q"/><stop offset=".495" class="ol7cejbxg"/><stop offset="1" class="te5smcbrc"/></linearGradient><linearGradient id="SVGHnLxrbtq" x1="6.839" x2="22.114" y1="2.806" y2="22.683" gradientUnits="userSpaceOnUse"><stop offset=".379" class="alal1lbgu"/><stop offset="1" class="htihj0m8a"/></linearGradient></defs></g>`,
		"fallback": "fluent-color:weather-snowflake-24",
	});
}

export default Component;
