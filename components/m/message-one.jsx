import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gopnm44um.css';
import '../../css/h/h3mxyjh3o.css';
import '../../css/t/t43uemldg.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGWCI2renM"><g class="gopnm44um"><path class="h3mxyjh3o"/><path class="t43uemldg"/></g></mask></defs><path mask="url(#SVGWCI2renM)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:message-one",
	});
}

export default Component;
