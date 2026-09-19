import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e-qc7ybfy.css';
import '../../css/v/v4b5s9tmh.css';
import '../../css/i/iowna0rzx.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGOK6PceUP"><g class="ft5dv1b6b"><rect class="e-qc7ybfy"/><path class="v4b5s9tmh"/><path class="iowna0rzx"/></g></mask></defs><path mask="url(#SVGOK6PceUP)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:medicine-chest",
	});
}

export default Component;
