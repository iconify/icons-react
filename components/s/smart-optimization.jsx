import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o6g817zjy.css';
import '../../css/f/ftdatwbuu.css';
import '../../css/h/hx8ukgbtk.css';
import '../../css/a/arfkx6ssl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="o6g817zjy"><path class="ftdatwbuu"/><path class="hx8ukgbtk"/><path class="arfkx6ssl"/></g>`,
		"fallback": "icon-park:smart-optimization",
	});
}

export default Component;
