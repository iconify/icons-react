import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gy0k7rbbq.css';
import '../../css/b/bqbzmxglo.css';
import '../../css/s/sdpmrcc2s.css';
import '../../css/c/c7ocmjbun.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGgZozgdiX"><g class="ft5dv1b6b"><path class="gy0k7rbbq"/><path class="bqbzmxglo"/><path class="sdpmrcc2s"/><path class="c7ocmjbun"/></g></mask></defs><path mask="url(#SVGgZozgdiX)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:road-cone",
	});
}

export default Component;
