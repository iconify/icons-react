import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/a/af1ozmbkx.css';
import '../../css/n/n6g8ofb5v.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGkTn81dxT"><g class="s9cl3zbei"><rect class="af1ozmbkx"/><path class="n6g8ofb5v"/></g></mask></defs><path mask="url(#SVGkTn81dxT)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:ipad-one",
	});
}

export default Component;
