import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r-_u4j5sr.css';
import '../../css/n/n1mjunbsu.css';
import '../../css/z/zjlcq8qtg.css';
import '../../css/z/zo3fyrbzl.css';
import '../../css/g/g-kxtc9le.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="r-_u4j5sr"/><mask id="SVGwaBrFeRg" class="n1mjunbsu"><path class="zjlcq8qtg"/><path clip-rule="evenodd" class="zo3fyrbzl"/></mask><path mask="url(#SVGwaBrFeRg)" class="g-kxtc9le"/>`,
		"fallback": "qlementine-icons:sms-16",
	});
}

export default Component;
