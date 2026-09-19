import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/t/tn_s-dbef.css';
import '../../css/s/sdia6zb7q.css';
import '../../css/q/qjj7xz7uz.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGFND0weWo"><g class="s9cl3zbei"><path class="tn_s-dbef"/><path class="sdia6zb7q"/><circle class="qjj7xz7uz"/></g></mask></defs><path mask="url(#SVGFND0weWo)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:shoulder-bag",
	});
}

export default Component;
