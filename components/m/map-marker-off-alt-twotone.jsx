import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1mjunbsu.css';
import '../../css/d/d7fz9ubig.css';
import '../../css/g/gepg83bfh.css';
import '../../css/q/qlms35rim.css';
import '../../css/w/w49j0rbvv.css';
import '../../css/t/tb2tmcbqs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGTCawEeVR"><g class="n1mjunbsu"><path fill-opacity="0" d="M12 20.5c0 0 -6 -7 -6 -11.5c0 -3.31 2.69 -6 6 -6c3.31 0 6 2.69 6 6c0 4.5 -6 11.5 -6 11.5Z" class="d7fz9ubig"><animate fill="freeze" attributeName="d" dur="0.4s" keyTimes="0;0.7;1" values="M12 20.5c0 0 -1 -1.5 -1 -2.5c0 -0.5 0.5 -1 1 -1c0.5 0 1 0.5 1 1c0 1 -1 2.5 -1 2.5Z;M12 20.5c0 0 -7 -7.5 -7 -12.5c0 -3.5 3 -7 7 -7c4 0 7 3.5 7 7c0 5 -7 12.5 -7 12.5Z;M12 20.5c0 0 -6 -7 -6 -11.5c0 -3.31 2.69 -6 6 -6c3.31 0 6 2.69 6 6c0 4.5 -6 11.5 -6 11.5Z"/><animate fill="freeze" attributeName="fill-opacity" begin="0.4s" dur="0.15s" to=".3"/></path><circle class="gepg83bfh"><animate fill="freeze" attributeName="r" begin="0.65s" dur="0.2s" to="2.5"/></circle></g><path stroke-dashoffset="28" transform="rotate(45 12 12)" class="qlms35rim"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.85s" dur="0.4s" to="0"/></path></mask></defs><path mask="url(#SVGTCawEeVR)" class="w49j0rbvv"/><path stroke-dashoffset="28" transform="rotate(45 12 12)" class="tb2tmcbqs"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.85s" dur="0.4s" to="0"/></path>`,
		"fallback": "line-md:map-marker-off-alt-twotone",
	});
}

export default Component;
