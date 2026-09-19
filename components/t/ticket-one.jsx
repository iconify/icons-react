import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gopnm44um.css';
import '../../css/r/r4eo4kcpj.css';
import '../../css/s/sxv5582gx.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGA1BlOboC"><g class="gopnm44um"><path class="r4eo4kcpj"/><path class="sxv5582gx"/></g></mask></defs><path mask="url(#SVGA1BlOboC)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:ticket-one",
	});
}

export default Component;
