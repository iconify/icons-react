import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/z/zg8hssbyt.css';
import '../../css/g/gjvsk4icl.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGLW4rHc6o"><g class="aql7dnt-u"><path class="zg8hssbyt"/><path class="gjvsk4icl"/></g></mask></defs><path mask="url(#SVGLW4rHc6o)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:signal-tower",
	});
}

export default Component;
