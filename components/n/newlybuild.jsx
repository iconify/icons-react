import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/v/v9jvlqb3d.css';
import '../../css/f/fvk6mt17r.css';
import '../../css/l/lx86l0pzx.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGnVrMhbpH"><g class="aql7dnt-u"><path class="v9jvlqb3d"/><rect class="fvk6mt17r"/><path class="lx86l0pzx"/></g></mask></defs><path mask="url(#SVGnVrMhbpH)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:newlybuild",
	});
}

export default Component;
