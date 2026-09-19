import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/q/qek2tkbit.css';
import '../../css/q/ql-g5bbuf.css';
import '../../css/t/tynws4brr.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGxTNwcd8l"><g class="s9cl3zbei"><rect class="qek2tkbit"/><path class="ql-g5bbuf"/><path class="tynws4brr"/></g></mask></defs><path mask="url(#SVGxTNwcd8l)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:nine-key",
	});
}

export default Component;
