import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/s/s3_-80xqi.css';
import '../../css/x/xt4d97b9d.css';
import '../../css/y/yb7i4f_wm.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGY9buibfK"><g class="aql7dnt-u"><path class="s3_-80xqi"/><path class="xt4d97b9d"/><path class="yb7i4f_wm"/></g></mask></defs><path mask="url(#SVGY9buibfK)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:playback-progress",
	});
}

export default Component;
