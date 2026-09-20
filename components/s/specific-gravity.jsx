import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.mezr3tb8q {
  fill: currentColor;
  d: path("M7 22q-.775 0-1.35-.5T5 20.225L3 2h18l-2 18.225q-.075.775-.65 1.275T17 22zM5.675 8H9.35q.525-.475 1.2-.737T12 7t1.45.263t1.2.737h3.675l.425-4H5.225zM12 13q.825 0 1.413-.587T14 11t-.587-1.412T12 9t-1.412.588T10 11t.588 1.413T12 13");
}
</style><path class="mezr3tb8q"/>`,
		"fallback": "material-symbols:specific-gravity",
	});
}

export default Component;
